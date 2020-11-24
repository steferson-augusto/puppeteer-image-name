/* eslint-disable multiline-ternary */
import Head from 'next/head'
import { FormEvent, useCallback, useRef, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Body, Form, Content, Label } from '../styles/components'
import Animation from '../styles/components/Animation'
import Button from '../styles/components/Button'
import Input from '../styles/components/Input'

const Home: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')

  const handleExtract = useCallback(async (e: FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)

      const destiny = ref.current.value
      const { data } = await axios.post('/api/extract', { destiny })
      console.log(data)
      setValue(data)
      if (data === '') {
        toast.error('😕 Não encontramos nenhum registro.', {
          position: 'bottom-center',
          autoClose: 5000,
          className: 'toast-error'
        })
      }
      setLoading(false)
    } catch {
      setLoading(false)
      toast.error('🔥 Houve um problema na busca.', {
        position: 'bottom-center',
        autoClose: 5000,
        className: 'toast-error'
      })
    }
  }, [])

  const handleCopy = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).then(
        () => {
          toast.dark('🚀 Copiado para área de transferência', {
            position: 'bottom-center',
            autoClose: 3000,
            className: 'toast'
          })
        },
        () => {
          toast.error('🔥 Falha ao copiar para área de transferência', {
            position: 'bottom-center',
            autoClose: 3000,
            className: 'toast-error'
          })
        }
      )
    }
  }, [value])

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Body>
          <Form onSubmit={handleExtract}>
            <Input
              ref={ref}
              label="URL"
              placeholder="https://selecao.picsize.com.br/exemplo/select/summary"
              name="url-location"
              type="url"
              pattern=".+"
              required
            />
            <Button icon="magic" type="submit" disabled={loading}>
              EXTRAIR
            </Button>
          </Form>
          <Content>
            {loading ? (
              <Animation width="300px" />
            ) : value.length > 0 ? (
              <>
                <Label>{value}</Label>
                {value !== 'Não encontramos nenhum registro.' && (
                  <Button icon="copy" onClick={handleCopy}>
                    COPIAR
                  </Button>
                )}
              </>
            ) : null}
          </Content>
          <ToastContainer />
        </Body>
      </main>
    </div>
  )
}

export default Home
