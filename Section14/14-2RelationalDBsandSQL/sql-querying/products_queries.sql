-- Add a product to the table with the name of 'chair',
--price of 44.00, and can_be_returned of false
INSERT into products
(name, price, can_be_returned)
VALUES
('chair',44.00,'f');

--Add a product to the table with the name of 'stool',
--price of 25.99, and can_be_returned of true
INSERT into products
(name, price, can_be_returned)
VALUES
('stool',25.99,'t');

--Add a product to the table with the name of 'table',
--price of 124.00, and can_be_returned of false
INSERT into products
(name, price, can_be_returned)
VALUES
('table',124.00,'f');

--Display all of the rows and colums in the table
SELECT * FROM products;

--Display all of the names of the products
SELECT name FROM products;

--Display all of the names and prices of the products
SELECT name, price FROM products;

--Add a new product - make up whatever you would like
INSERT into products
(name, price, can_be_returned)
VALUES
('ottoman',74.99,'t');

--Display only the products that can_be_returned
SELECT * FROM products WHERE can_be_returned = 't';

--Display only the products that have a price less than 44.00
SELECT * FROM products where price < 44.00;

--Display only the products that have a price between 22.50 and 99.99
SELECT * FROM products where price <= 22.50 and price >= 99.99;

--There's a sale going on: Everything is $20 off! Update the db accordingly
UPDATE products SET price = price - 20.00;

--Because of the sale, everything that costs less than $25 has sold out.
--Remove all products whoce price meets this criteria.
DELETE FROM products WHERE price < 20.00;

--And now the sale is over. For the remaining products,
--increase their price by $20.
UPDATE products SET price = price + 20;

--There is a new company policy: everything is returnable.
--Update the db accordingly.
UPDATE products SET can_be_returned = 't' where can_be_returned = 'f';