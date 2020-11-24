/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case 'POST': {
      const { destiny } = request.body
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(destiny, { waitUntil: 'networkidle0' })

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
