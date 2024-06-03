## Unlocking the Power of Nuxt JS

### Server-side capabilities

TODOs

- Up and running PostgresDB
- Integrate PostgresDB with Prisma ORM
- Create API Endpoints on Nuxt JS and use Prisma

### Prisma and PostGres DB

1. **Docker Postgress Command**

```
docker run --name test-postgres
-e POSTGRES_PASSWORD="secret"
-e POSTGRES_DB="testDB"
-e POSTGRES_USER="test-user" -p 8080:5432  -d  postgres
```

2. **Postgres DB Connection String**

```
DATABASE_URL="postgresql://test-user:secret@localhost:8080/testDB?schema=public"
```

3. **Prisma schema**

```prisma

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean  @default(false)
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  Int?
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

```

4.  **Prisma init command**
    `pnpm exec prisma init`
    or
    `npx prisma init`
5.  **Prima data migration command**
    `pnpm exec prisma migrate dev --name init`
    or
    `npx prisma migrate dev --name init`

6.  **Postgres SQL Query to check the newly created tables**
    ```sql
    SELECT table_name FROM information_schema.tables WHERE table_schema='public';
    ```
7.  **Prisma client**
    `import { PrismaClient } from '@prisma/client'`

### Creating API Endpoint

1. **Create a new User**
   Endpoint: '/api/createNewUser.post.ts'

   ```typescript
   import { PrismaClient } from "@prisma/client";
   export default defineEventHandler(async (event) => {
     const prismaClient = new PrismaClient();
     const body = await readBody(event);
     const result = await prismaClient.user.create({
       data: {
         email: body.email,
         name: body.name,
       },
     });
     console.log("Created a new User", result);
     return result;
   });
   ```
