import { NextResponse } from "next/server"
import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const databaseId = process.env.NOTION_DATABASE_ID as string

export async function POST(req: Request) {
  const { empresa, telefone, email, descricao, nome } = await req.json()

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Empresa: {
          title: [{ text: { content: empresa } }],
        },
        Telefone: {
          rich_text: [{ text: { content: telefone } }],
        },
        Email: {
          email,
        },
        Descrição: {
          rich_text: [{ text: { content: descricao } }],
        },
        Nome: {
          rich_text: [{ text: { content: nome } }],
        },
        Status: {
          status:{
            name: "Não iniciada"
          },
        },
        Origem: {
          status:{
            name: "Site/Instagram"
          },
        },
      },
    })

    return NextResponse.json({ message: "Briefing enviado com sucesso" }, { status: 200 })
  } catch (error) {
    console.error("Erro ao criar página no Notion:", error)
    return NextResponse.json({ error: "Erro ao enviar briefing" }, { status: 500 })
  }
}
