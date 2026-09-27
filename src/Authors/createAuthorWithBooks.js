import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Machado de Assis",
      books: {
        create: [
          {
            title: "Dom Casmurro",
            pages: 256,
          },
          {
            title: "Memórias Póstumas de Brás Cubas",
            pages: 208,
          },
        ],
      },
    },
    include: {
      books: true,
    },
  })

  console.log("Autor e livros cadastrados com sucesso:")
  console.log(JSON.stringify(result, null, 2))
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })