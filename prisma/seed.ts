// prisma/seed.ts

import { PrismaClient, TransactionType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Accounts
  const account1 = await prisma.account.create({
    data: {
      username: 'user1',
      email: 'user1@example.com',
      passwordHash: 'hashedpassword1',
    },
  });

  const account2 = await prisma.account.create({
    data: {
      username: 'user2',
      email: 'user2@example.com',
      passwordHash: 'hashedpassword2',
    },
  });

  // Seed Cryptocurrencies
  const bitcoin = await prisma.cryptocurrency.create({
    data: {
      name: 'Bitcoin',
      symbol: 'BTC',
      currentPrice: 50000.0,
    },
  });

  const ethereum = await prisma.cryptocurrency.create({
    data: {
      name: 'Ethereum',
      symbol: 'ETH',
      currentPrice: 3000.0,
    },
  });

  // Seed Transactions
  await prisma.transaction.create({
    data: {
      accountId: account1.id,
      cryptoId: bitcoin.id,
      transactionType: TransactionType.BUY,
      amount: 0.1,
      priceAtTransaction: 50000.0,
    },
  });

  await prisma.transaction.create({
    data: {
      accountId: account2.id,
      cryptoId: ethereum.id,
      transactionType: TransactionType.BUY,
      amount: 1.5,
      priceAtTransaction: 3000.0,
    },
  });

  // Seed Wallets
  await prisma.wallet.create({
    data: {
      accountId: account1.id,
      cryptoId: bitcoin.id,
      balance: 0.1,
    },
  });

  await prisma.wallet.create({
    data: {
      accountId: account2.id,
      cryptoId: ethereum.id,
      balance: 1.5,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
