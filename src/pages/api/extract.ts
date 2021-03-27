/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'
// import chrome from 'chrome-aws-lambda' // usar em produção

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case 'POST': {
      const { destiny } = request.body
      const browser = await puppeteer.launch({
        // usar parâmetros apenas em produção
        // args: chrome.args,
        // executablePath:
        //   (await chrome.executablePath) || '/usr/bin/chromium-browser'
      })
      const page = await browser.newPage()
      try {
        await page.goto(destiny, {
          waitUntil: [
            'load',
            'domcontentloaded',
            'networkidle0',
            'networkidle2'
          ]
        })
      } catch (error) {
        console.log(error)
      }
      const list = await page.evaluate(() => {
        const nodes = document.querySelectorAll('section span')
        const nodesArray = Array.from(nodes)
        const list = nodesArray.slice(2).map(item => item.textContent)

        return list
      })

      await browser.close()

      const final = list.reduce(
        (final, item) => `${final} ${item.split('.')[0]}.,`,
        ''
      )

      response.send(final)
      break
    }
    default:
      response.send({ message: 'Apenas método POST é permitido' })
  }
}
