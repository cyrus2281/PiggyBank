
import { TransactionTypeEnum } from "../enums/transaction-type.enum";
import { Directory } from "../models/directory";
import { Transaction } from "../models/transaction";

const transactionGenerator = (count: number):Transaction[] => {
  const transactions: Transaction[] =[];

  for (let i = 0; i < count; i++) {
    transactions.push(new Transaction({
      type: i%2===0 ? TransactionTypeEnum.INCOME : TransactionTypeEnum.EXPENSE,
      id: `transaction_${i}`,
      title: `Transaction number ${i}`,
      category: ' custom',
      amount: +(Math.random()*100).toFixed(2),
      dateAdded: new Date(),
    }));
  }

  return transactions;
}

export const testDirectoryValues = [
  new Directory({
    id: 'id_one',
    name: 'directory one',
    icon: 'icon',
    creationDate: new Date(0),
    modifiedDate: new Date(),
    transactions: transactionGenerator(10),
    subDirectories: [
      new Directory({
        id: 'sub_id_one',
        name: 'subDirectory one',
        icon: 'icon',
        creationDate: new Date(0),
        modifiedDate: new Date(),
        transactions: transactionGenerator(3),
        subDirectories: [
          new Directory({
            id: 'sub_sub_id_one',
            name: 'subSubDirectory one',
            icon: 'icon',
            creationDate: new Date(0),
            modifiedDate: new Date(),
            transactions: transactionGenerator(1),
          }),
        ]
      }),
      new Directory({
        id: 'sub_id_two',
        name: 'subDirectory two',
        icon: 'icon',
        creationDate: new Date(0),
        modifiedDate: new Date(),
        transactions: [],
      }),
    ]
  }),
  new Directory({
    id: 'id_two',
    name: 'directory two',
    icon: 'icon',
    creationDate: new Date(0),
    modifiedDate: new Date(),
    transactions: transactionGenerator(5),
  }),
  new Directory({
    id: 'id_three',
    name: 'directory three',
    icon: 'icon',
    creationDate: new Date(0),
    modifiedDate: new Date(),
    transactions: transactionGenerator(10),
  }),
  new Directory({
    id: 'id_four',
    name: 'directory four',
    icon: 'icon',
    creationDate: new Date(0),
    modifiedDate: new Date(),
    transactions: transactionGenerator(7),
  }),
  new Directory({
    id: 'id_five',
    name: 'directory five',
    icon: 'icon',
    creationDate: new Date(0),
    modifiedDate: new Date(),
    transactions: [],
  }),
]

