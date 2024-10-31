const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

function getAccountById (id)
{
	for (const account of accounts)
	{
		//only accept numbers
		if (account.id === id)
		{
			console.log("Account found");
			return account;
		}
	}
}

function createAccount (newAccountId, newAccountOwner)
{
	//check if account already exists
	const account = getAccountById(newAccountId);
	if(account) {
		throw new Error("Account already exists");
	}

	//check account id is within accepted number range
	if(!Number.isFinite(newAccountId) || newAccountId < 1){
		throw new Error("Account ID must be a finite, positive number");
	}

	//check name type and isn't empty
	if(typeof newAccountOwner !== "string" || newAccountOwner.length < 1){
		throw new Error("A name must be provided to create an account");
	}

	accounts.push(
		{
			id: newAccountId,
			owner: newAccountOwner,
			balance: "0"
		}
	);
	console.log("New account created");
}

function depositMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found");
	}

	//check deposit amount
	if(!Number.isFinite(amount) || amount <= 0){
		throw new Error("Deposits must be a finite, positive amount");
	}

	account.balance += amount;
	console.log("Successfully deposited " + amount + " to account " + accountId);
}

function withdrawMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found.");
	}

	//check withdrawal ammount
	if (!Number.isFinite(amount) || amount <= 0)
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a finite, positive number.");
	}

	//check balance against withdrawal
	if(account.balance < amount) {
		throw new Error("Insufficient funds to complete the withdrawal");
	}

	account.balance -= amount;
	console.log("Successfully withdrew " + amount + " from account " + accountId);
}

function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount)
	{
		throw new Error("Source account not found.");
	}

	//check destination account
	if(!toAccount) {
		throw new Error("Destination account not found");
	}

	if (!Number.isFinite(amount) || amount < 0)
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}

	//check source account balance against transfer amount
	if(fromAccount.balance < amount) {
		throw new Error("Source account has insufficient funds to complete the transfer");
	}

	toAccount.balance += amount;
	console.log("Successfully transferred " + amount + " from account " + fromAccount + " to account " + toAccount);
}


//Hints:

getAccountById("1");

// createAccount(1, "Alice");
// createAccount("3", "Charlie");
// createAccount(-3, "Charlie");
// createAccount(3, ["Charlie"]);
// createAccount(3, "");
// createAccount(3, "  ");

// depositMoney(1, "300")
// depositMoney(1, -300)
// depositMoney(1, 0)
// depositMoney(1, Infinity)
// depositMoney(4, 100)

// withdrawMoney(1, -100)
// withdrawMoney(1, 0)
// withdrawMoney(1, 501)

// transferMoney(1, 4, 100)
// transferMoney(1, 2, 501);
// transferMoney(1, 2, 100);

