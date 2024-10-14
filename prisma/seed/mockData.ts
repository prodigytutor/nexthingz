import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('f74e1bbf-18d1-423e-9687-3cd265920b6b', '10Kathlyn36@yahoo.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=12', 'inv789ghi', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('173370d6-045e-4028-97f2-1a8bc9d245d8', '19Eunice.Kuhn37@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv789ghi', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('0761b8c9-c1ee-485a-adb3-c67a924c2f46', '28Joseph.Predovic@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv456def', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('a6c3476b-a233-4ff8-8527-b1cc088d766f', '37Rupert_Feest65@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inv012jkl', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('fab49606-3be9-4b74-92d6-8f83c853e3d7', '46Cara_McClure41@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv456def', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('bf11dce7-6946-46e9-bcc1-10d95acc778c', '55Stefan_Waters47@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inv123abc', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('cde30a93-d7c8-4bfd-a213-de181239a86e', '64Viviane.Cronin@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv012jkl', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('7cc2b50a-86bd-4b8c-aab2-feb34873f4d2', '73Ariel17@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv456def', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('995be5eb-bad1-40fe-9ae2-8428ba850f21', '82Pierre37@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv123abc', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a9ecc402-4f91-4877-b4d3-9e3a37db8806', 'Creative Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=92');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b21b1a05-30ff-410c-8e61-e836943ee0f2', 'NextGen Technologies', 'https://i.imgur.com/YfJQV5z.png?id=95');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('95a890c4-dc9b-45ee-98c8-18d553c72082', 'NextGen Technologies', 'https://i.imgur.com/YfJQV5z.png?id=98');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('72ee91b2-5bf2-48c4-8882-f14d471a06b9', 'NextGen Technologies', 'https://i.imgur.com/YfJQV5z.png?id=101');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('513b63fb-21a6-48c0-9357-f119f40cc36d', 'NextGen Technologies', 'https://i.imgur.com/YfJQV5z.png?id=104');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b763c783-68f8-419f-9a25-253cc0a93008', 'Global Enterprises Ltd.', 'https://i.imgur.com/YfJQV5z.png?id=107');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('fb9fdb6c-6dd2-4386-91a8-6f69a1cfeeca', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=110');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('d43327e0-2538-4212-87be-9fd2d51b4f2d', 'NextGen Technologies', 'https://i.imgur.com/YfJQV5z.png?id=113');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('1353cfc5-d7f8-4194-9488-9a3ec764c9e7', 'Visionary Ventures', 'https://i.imgur.com/YfJQV5z.png?id=116');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('28f4e2c5-bf33-4409-98b5-204835512d0a', 'Visionary Ventures', 'https://i.imgur.com/YfJQV5z.png?id=119');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('a6ea1abc-5f0a-40ea-a509-26742734b62c', 'Data Analyst', 'a6c3476b-a233-4ff8-8527-b1cc088d766f', '513b63fb-21a6-48c0-9357-f119f40cc36d');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f97e0ea3-2c9a-4f84-b81f-c22468761706', 'Administrator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'fb9fdb6c-6dd2-4386-91a8-6f69a1cfeeca');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e6418697-cba8-4c0a-bf88-22f353140e5f', 'Administrator', 'a6c3476b-a233-4ff8-8527-b1cc088d766f', '1353cfc5-d7f8-4194-9488-9a3ec764c9e7');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('1524affa-b235-4443-8335-88d9edcba88e', 'Marketing Specialist', '0761b8c9-c1ee-485a-adb3-c67a924c2f46', '1353cfc5-d7f8-4194-9488-9a3ec764c9e7');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e4ae9a9b-3cc4-4af5-9fef-4e22db216069', 'Content Manager', 'f74e1bbf-18d1-423e-9687-3cd265920b6b', '28f4e2c5-bf33-4409-98b5-204835512d0a');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f0ee2908-addd-4f9a-94db-17c2336891be', 'Administrator', '7cc2b50a-86bd-4b8c-aab2-feb34873f4d2', '1353cfc5-d7f8-4194-9488-9a3ec764c9e7');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('568c600d-beb6-47b2-ae55-7b13f87eb5d0', 'Administrator', '7cc2b50a-86bd-4b8c-aab2-feb34873f4d2', '1353cfc5-d7f8-4194-9488-9a3ec764c9e7');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('927e9c72-e363-40e5-bca0-693ee4b77072', 'Content Manager', 'cde30a93-d7c8-4bfd-a213-de181239a86e', '1353cfc5-d7f8-4194-9488-9a3ec764c9e7');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('9f3231f2-46e8-4f55-9343-1f698e8445cc', 'Administrator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'd43327e0-2538-4212-87be-9fd2d51b4f2d');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('8f407052-d2f3-4e28-888a-e03818c956bb', 'Administrator', 'bf11dce7-6946-46e9-bcc1-10d95acc778c', 'd43327e0-2538-4212-87be-9fd2d51b4f2d');

INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('17d06f13-59c1-468d-9f8b-bda94b600a2e', 'httpsexample.comnotifications1', 'sub_fedcba0987654321', '7cc2b50a-86bd-4b8c-aab2-feb34873f4d2');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('77e4acb2-f74a-4267-989b-706845f15cea', 'httpsexample.comnotifications1', 'sub_abcdef1234567890', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('79dc2f76-0390-4be6-9bf8-d7e1f81d9300', 'httpsexample.comnotifications4', 'sub_1122334455667788', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('3c301546-259f-4433-8da2-e3ee1af6dcc4', 'httpsexample.comnotifications4', 'sub_1122334455667788', 'cde30a93-d7c8-4bfd-a213-de181239a86e');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('df97cf73-94c3-4106-95a9-3c086bea0e43', 'httpsexample.comnotifications1', 'sub_0987654321fedcba', '173370d6-045e-4028-97f2-1a8bc9d245d8');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('119db4c3-5fed-4fb8-a253-939fee436a5c', 'httpsexample.comnotifications5', 'sub_0987654321fedcba', '995be5eb-bad1-40fe-9ae2-8428ba850f21');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('f9d3cd30-e3ba-4506-b782-7c95f2b3c0f5', 'httpsexample.comnotifications1', 'sub_0987654321fedcba', 'f74e1bbf-18d1-423e-9687-3cd265920b6b');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('b829dd88-92a9-4860-bc0b-1fbe959940e1', 'httpsexample.comnotifications1', 'sub_1122334455667788', '0761b8c9-c1ee-485a-adb3-c67a924c2f46');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('e583d4a5-abe3-4113-ab3f-f5e0a99459bb', 'httpsexample.comnotifications1', 'sub_fedcba0987654321', 'a6c3476b-a233-4ff8-8527-b1cc088d766f');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('57b248fc-9270-4f5c-8cec-378b0f21aa63', 'httpsexample.comnotifications4', 'sub_abcdef1234567890', 'f74e1bbf-18d1-423e-9687-3cd265920b6b');

INSERT INTO "Item" ("id", "type", "content", "url", "fileUrl", "title", "description", "metadata", "userId", "organizationId") VALUES ('bfde9a26-7e59-4067-9f8f-613b3152c843', 'code snippet', 'httpsexample.comarticle', 'https://i.imgur.com/YfJQV5z.png?id=173', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=174', 'Interesting Article', 'A simple JavaScript code snippet for beginners.', 'categorysecurity tagspassword date20230820', 'cde30a93-d7c8-4bfd-a213-de181239a86e', '513b63fb-21a6-48c0-9357-f119f40cc36d');
INSERT INTO "Item" ("id", "type", "content", "url", "fileUrl", "title", "description", "metadata", "userId", "organizationId") VALUES ('a3f81f08-fbfc-42b1-a0e2-827b0273fe3d', 'password', 'password123', 'https://i.imgur.com/YfJQV5z.png?id=181', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=182', 'Meeting Notes', 'A secure password for accessing the database.', 'categoryphotography tagssunset date20230605', '173370d6-045e-4028-97f2-1a8bc9d245d8', '1353cfc5-d7f8-4194-9488-9a3ec764c9e7');
INSERT INTO "Item" ("id", "type", "content", "url", "fileUrl", "title", "description", "metadata", "userId", "organizationId") VALUES ('69c88cca-1985-4a72-9b81-18ed66754eb4', 'image', 'password123', 'https://i.imgur.com/YfJQV5z.png?id=189', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=190', 'JavaScript Snippet', 'Notes from the team meeting held on Monday.', 'categoryreading tagstechnology date20230915', 'f74e1bbf-18d1-423e-9687-3cd265920b6b', 'd43327e0-2538-4212-87be-9fd2d51b4f2d');
INSERT INTO "Item" ("id", "type", "content", "url", "fileUrl", "title", "description", "metadata", "userId", "organizationId") VALUES ('61ef188b-2513-49d5-8b1b-c6044a922fe1', 'link', 'This is a memo about the meeting notes.', 'https://i.imgur.com/YfJQV5z.png?id=197', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=198', 'Interesting Article', 'A simple JavaScript code snippet for beginners.', 'categoryphotography tagssunset date20230605', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b763c783-68f8-419f-9a25-253cc0a93008');
INSERT INTO "Item" ("id", "type", "content", "url", "fileUrl", "title", "description", "metadata", "userId", "organizationId") VALUES ('e0efd782-9fd7-434b-96e9-83cfd05ffc41', 'code snippet', 'httpsexample.comarticle', 'https://i.imgur.com/YfJQV5z.png?id=205', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=206', 'Secure Password', 'A breathtaking view of the sunset over the mountains.', 'categorywork tagsmeeting date20231001', '173370d6-045e-4028-97f2-1a8bc9d245d8', '1353cfc5-d7f8-4194-9488-9a3ec764c9e7');
INSERT INTO "Item" ("id", "type", "content", "url", "fileUrl", "title", "description", "metadata", "userId", "organizationId") VALUES ('e13edb90-6e1f-4e7e-aa96-faefe856df7d', 'image', 'password123', 'https://i.imgur.com/YfJQV5z.png?id=213', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=214', 'Beautiful Sunset', 'An article about the latest trends in technology.', 'categorycode tagsjavascript date20230710', 'f74e1bbf-18d1-423e-9687-3cd265920b6b', '95a890c4-dc9b-45ee-98c8-18d553c72082');
INSERT INTO "Item" ("id", "type", "content", "url", "fileUrl", "title", "description", "metadata", "userId", "organizationId") VALUES ('a5d932d7-4eb8-4f19-8457-5fc15896317d', 'link', 'password123', 'https://i.imgur.com/YfJQV5z.png?id=221', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=222', 'Interesting Article', 'An article about the latest trends in technology.', 'categorywork tagsmeeting date20231001', 'a6c3476b-a233-4ff8-8527-b1cc088d766f', 'b763c783-68f8-419f-9a25-253cc0a93008');
INSERT INTO "Item" ("id", "type", "content", "url", "fileUrl", "title", "description", "metadata", "userId", "organizationId") VALUES ('b5303a26-b0aa-4a4c-a9cc-a2a5729edd63', 'memo', 'httpsexample.comarticle', 'https://i.imgur.com/YfJQV5z.png?id=229', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=230', 'Beautiful Sunset', 'A secure password for accessing the database.', 'categoryphotography tagssunset date20230605', '995be5eb-bad1-40fe-9ae2-8428ba850f21', '1353cfc5-d7f8-4194-9488-9a3ec764c9e7');
INSERT INTO "Item" ("id", "type", "content", "url", "fileUrl", "title", "description", "metadata", "userId", "organizationId") VALUES ('2251727c-0906-48ca-ad94-06ebad495bef', 'code snippet', 'httpsexample.comarticle', 'https://i.imgur.com/YfJQV5z.png?id=237', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=238', 'Beautiful Sunset', 'Notes from the team meeting held on Monday.', 'categoryreading tagstechnology date20230915', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '95a890c4-dc9b-45ee-98c8-18d553c72082');
INSERT INTO "Item" ("id", "type", "content", "url", "fileUrl", "title", "description", "metadata", "userId", "organizationId") VALUES ('e933f8ef-a158-4ec0-b915-eba5713486c0', 'link', 'console.logHello World', 'https://i.imgur.com/YfJQV5z.png?id=245', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=246', 'Interesting Article', 'A secure password for accessing the database.', 'categorycode tagsjavascript date20230710', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b21b1a05-30ff-410c-8e61-e836943ee0f2');

INSERT INTO "Category" ("id", "name", "userId") VALUES ('557e8496-221f-42ef-9951-a4fe62e6ab13', 'Fitness', '7cc2b50a-86bd-4b8c-aab2-feb34873f4d2');
INSERT INTO "Category" ("id", "name", "userId") VALUES ('f0ec8b5a-60a7-43b8-a01f-05bbd5a4e69d', 'Fitness', 'fab49606-3be9-4b74-92d6-8f83c853e3d7');
INSERT INTO "Category" ("id", "name", "userId") VALUES ('4779b0c6-b7c4-4003-939c-01ea5f25bf25', 'Technology', 'fab49606-3be9-4b74-92d6-8f83c853e3d7');
INSERT INTO "Category" ("id", "name", "userId") VALUES ('d33da694-d479-4b98-97cb-5eb3d6b1aa1b', 'Finance', 'fab49606-3be9-4b74-92d6-8f83c853e3d7');
INSERT INTO "Category" ("id", "name", "userId") VALUES ('d691dfce-3b27-44f0-b1db-ac8cfbc40cb3', 'Technology', 'fab49606-3be9-4b74-92d6-8f83c853e3d7');
INSERT INTO "Category" ("id", "name", "userId") VALUES ('c2e11ae0-60f5-48d5-962f-9684a7797319', 'Recipes', 'f74e1bbf-18d1-423e-9687-3cd265920b6b');
INSERT INTO "Category" ("id", "name", "userId") VALUES ('64d85a5d-8fa2-43a9-8971-669079e42e9b', 'Travel', 'fab49606-3be9-4b74-92d6-8f83c853e3d7');
INSERT INTO "Category" ("id", "name", "userId") VALUES ('35f10000-156a-40ec-935b-f742609d17bd', 'Finance', '0761b8c9-c1ee-485a-adb3-c67a924c2f46');
INSERT INTO "Category" ("id", "name", "userId") VALUES ('9d53843f-1953-4290-a77c-31b32471b6c7', 'Travel', '0761b8c9-c1ee-485a-adb3-c67a924c2f46');
INSERT INTO "Category" ("id", "name", "userId") VALUES ('4c82b422-8cda-4117-9a09-2650cf2c8375', 'Recipes', '0761b8c9-c1ee-485a-adb3-c67a924c2f46');

INSERT INTO "ItemCategory" ("id", "itemId", "categoryId") VALUES ('eae17f94-2804-44da-8709-47660c0aad86', 'bfde9a26-7e59-4067-9f8f-613b3152c843', 'd691dfce-3b27-44f0-b1db-ac8cfbc40cb3');
INSERT INTO "ItemCategory" ("id", "itemId", "categoryId") VALUES ('202b9f21-bb92-491f-b33d-2c53094a8a2c', '61ef188b-2513-49d5-8b1b-c6044a922fe1', '4c82b422-8cda-4117-9a09-2650cf2c8375');
INSERT INTO "ItemCategory" ("id", "itemId", "categoryId") VALUES ('b2123b2d-0c28-432f-ab74-21d13f5cfada', '2251727c-0906-48ca-ad94-06ebad495bef', '4779b0c6-b7c4-4003-939c-01ea5f25bf25');
INSERT INTO "ItemCategory" ("id", "itemId", "categoryId") VALUES ('923a2377-6549-4a31-afc9-808b14848562', 'bfde9a26-7e59-4067-9f8f-613b3152c843', 'f0ec8b5a-60a7-43b8-a01f-05bbd5a4e69d');
INSERT INTO "ItemCategory" ("id", "itemId", "categoryId") VALUES ('626690e4-fb84-4727-aef6-374ad2534336', '2251727c-0906-48ca-ad94-06ebad495bef', '4779b0c6-b7c4-4003-939c-01ea5f25bf25');
INSERT INTO "ItemCategory" ("id", "itemId", "categoryId") VALUES ('35bab86f-bdad-4ea4-b975-7886870bc53a', 'a5d932d7-4eb8-4f19-8457-5fc15896317d', '64d85a5d-8fa2-43a9-8971-669079e42e9b');
INSERT INTO "ItemCategory" ("id", "itemId", "categoryId") VALUES ('23a2a2a0-0659-483a-b27f-3ace958d012c', 'a3f81f08-fbfc-42b1-a0e2-827b0273fe3d', '64d85a5d-8fa2-43a9-8971-669079e42e9b');
INSERT INTO "ItemCategory" ("id", "itemId", "categoryId") VALUES ('7e7fb0eb-1d6e-4536-a340-3f391e08c4ed', 'e0efd782-9fd7-434b-96e9-83cfd05ffc41', 'd691dfce-3b27-44f0-b1db-ac8cfbc40cb3');
INSERT INTO "ItemCategory" ("id", "itemId", "categoryId") VALUES ('09001ffd-ffa1-4ba7-bc2f-a3eda703cbcb', 'e933f8ef-a158-4ec0-b915-eba5713486c0', '4c82b422-8cda-4117-9a09-2650cf2c8375');
INSERT INTO "ItemCategory" ("id", "itemId", "categoryId") VALUES ('f692b51e-adc5-4c47-95a2-ca186cb39e93', 'a3f81f08-fbfc-42b1-a0e2-827b0273fe3d', 'd33da694-d479-4b98-97cb-5eb3d6b1aa1b');

INSERT INTO "Tag" ("id", "name", "userId") VALUES ('ddf8b345-0f56-442e-95d4-13d74ce33cc1', 'Tech News', '7cc2b50a-86bd-4b8c-aab2-feb34873f4d2');
INSERT INTO "Tag" ("id", "name", "userId") VALUES ('dfcb4746-2497-4474-84eb-7eacef3eba4a', 'Tech News', 'a6c3476b-a233-4ff8-8527-b1cc088d766f');
INSERT INTO "Tag" ("id", "name", "userId") VALUES ('b49005a4-9681-4132-ac7a-d447e407012a', 'Recipes', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Tag" ("id", "name", "userId") VALUES ('3cb94a84-fe03-4f07-adb9-209580264884', 'Tech News', 'bf11dce7-6946-46e9-bcc1-10d95acc778c');
INSERT INTO "Tag" ("id", "name", "userId") VALUES ('55798eb9-82e7-4347-8430-18516445d942', 'Tech News', '7cc2b50a-86bd-4b8c-aab2-feb34873f4d2');
INSERT INTO "Tag" ("id", "name", "userId") VALUES ('a711a261-8c14-40e5-8a2a-b6664d7dd75b', 'Travel', 'fab49606-3be9-4b74-92d6-8f83c853e3d7');
INSERT INTO "Tag" ("id", "name", "userId") VALUES ('6f72aa19-6930-4bdd-b120-456a9d0d4e16', 'Travel', 'cde30a93-d7c8-4bfd-a213-de181239a86e');
INSERT INTO "Tag" ("id", "name", "userId") VALUES ('41f638ee-d618-41d5-b74d-1b3fbe3cdbfa', 'Travel', '0761b8c9-c1ee-485a-adb3-c67a924c2f46');
INSERT INTO "Tag" ("id", "name", "userId") VALUES ('d1a013cf-a293-495d-9185-1b9fa1277a4d', 'Productivity', '7cc2b50a-86bd-4b8c-aab2-feb34873f4d2');
INSERT INTO "Tag" ("id", "name", "userId") VALUES ('9a34a349-13d3-4b94-bb53-d7dd8a61932c', 'Fitness', 'cde30a93-d7c8-4bfd-a213-de181239a86e');

INSERT INTO "ItemTag" ("id", "itemId", "tagId") VALUES ('c5a1fad0-3dca-403b-b505-dd3577b57f5f', '61ef188b-2513-49d5-8b1b-c6044a922fe1', '55798eb9-82e7-4347-8430-18516445d942');
INSERT INTO "ItemTag" ("id", "itemId", "tagId") VALUES ('27125b3c-d592-45b2-ad9d-bde60c0c92a4', '69c88cca-1985-4a72-9b81-18ed66754eb4', 'a711a261-8c14-40e5-8a2a-b6664d7dd75b');
INSERT INTO "ItemTag" ("id", "itemId", "tagId") VALUES ('944fd55a-8912-4f50-85f7-283cf0bdb959', '2251727c-0906-48ca-ad94-06ebad495bef', 'ddf8b345-0f56-442e-95d4-13d74ce33cc1');
INSERT INTO "ItemTag" ("id", "itemId", "tagId") VALUES ('60837e90-427d-409c-9947-bbbdc462b83a', 'b5303a26-b0aa-4a4c-a9cc-a2a5729edd63', '6f72aa19-6930-4bdd-b120-456a9d0d4e16');
INSERT INTO "ItemTag" ("id", "itemId", "tagId") VALUES ('0539d1ef-b5d4-4971-bdf4-a31893ba5605', 'a5d932d7-4eb8-4f19-8457-5fc15896317d', 'd1a013cf-a293-495d-9185-1b9fa1277a4d');
INSERT INTO "ItemTag" ("id", "itemId", "tagId") VALUES ('fbfba456-016e-47c8-9021-14b05ee21f5d', '2251727c-0906-48ca-ad94-06ebad495bef', '55798eb9-82e7-4347-8430-18516445d942');
INSERT INTO "ItemTag" ("id", "itemId", "tagId") VALUES ('b773b9cc-a114-4552-92ff-153c8e535f8f', 'b5303a26-b0aa-4a4c-a9cc-a2a5729edd63', 'ddf8b345-0f56-442e-95d4-13d74ce33cc1');
INSERT INTO "ItemTag" ("id", "itemId", "tagId") VALUES ('79c858af-59a0-4a66-8caa-2b9efb612d61', '2251727c-0906-48ca-ad94-06ebad495bef', 'b49005a4-9681-4132-ac7a-d447e407012a');
INSERT INTO "ItemTag" ("id", "itemId", "tagId") VALUES ('bae0b97d-8f95-45df-a22c-23ef7575107d', '69c88cca-1985-4a72-9b81-18ed66754eb4', '3cb94a84-fe03-4f07-adb9-209580264884');
INSERT INTO "ItemTag" ("id", "itemId", "tagId") VALUES ('9a4ebcb0-b811-4541-b5ba-92ac95992fd9', '61ef188b-2513-49d5-8b1b-c6044a922fe1', '9a34a349-13d3-4b94-bb53-d7dd8a61932c');

INSERT INTO "SuggestionFeedback" ("id", "feedback", "userId", "itemId") VALUES ('8f9af88f-bbb3-4c43-a181-b42de4fe15cb', 'This suggestion was really helpful', '7cc2b50a-86bd-4b8c-aab2-feb34873f4d2', '2251727c-0906-48ca-ad94-06ebad495bef');
INSERT INTO "SuggestionFeedback" ("id", "feedback", "userId", "itemId") VALUES ('921c769d-6211-409f-953f-cf49bfd9c0a6', 'This suggestion was really helpful', '7cc2b50a-86bd-4b8c-aab2-feb34873f4d2', 'b5303a26-b0aa-4a4c-a9cc-a2a5729edd63');
INSERT INTO "SuggestionFeedback" ("id", "feedback", "userId", "itemId") VALUES ('442c7f01-204a-47c8-8fef-2428823b23f0', 'I didnt find this relevant to my interests.', '0761b8c9-c1ee-485a-adb3-c67a924c2f46', '2251727c-0906-48ca-ad94-06ebad495bef');
INSERT INTO "SuggestionFeedback" ("id", "feedback", "userId", "itemId") VALUES ('e8f3bbab-be82-4cba-b48f-d086706f69e8', 'I loved this suggestion it was spot on', 'fab49606-3be9-4b74-92d6-8f83c853e3d7', '2251727c-0906-48ca-ad94-06ebad495bef');
INSERT INTO "SuggestionFeedback" ("id", "feedback", "userId", "itemId") VALUES ('7c163af5-4a8f-4d23-80b2-6be8a4cc7112', 'I loved this suggestion it was spot on', 'cde30a93-d7c8-4bfd-a213-de181239a86e', '61ef188b-2513-49d5-8b1b-c6044a922fe1');
INSERT INTO "SuggestionFeedback" ("id", "feedback", "userId", "itemId") VALUES ('bdf70234-6558-4e12-a567-5628e583e31f', 'The suggestion was okay but not exactly what I was looking for.', 'f74e1bbf-18d1-423e-9687-3cd265920b6b', 'e933f8ef-a158-4ec0-b915-eba5713486c0');
INSERT INTO "SuggestionFeedback" ("id", "feedback", "userId", "itemId") VALUES ('4c888460-e82d-436e-b99c-08a4c9f3d34f', 'The suggestion was okay but not exactly what I was looking for.', 'f74e1bbf-18d1-423e-9687-3cd265920b6b', 'a5d932d7-4eb8-4f19-8457-5fc15896317d');
INSERT INTO "SuggestionFeedback" ("id", "feedback", "userId", "itemId") VALUES ('5c381252-6cfe-4723-9f5e-f3bff7260c58', 'Great recommendation found it very useful.', '0761b8c9-c1ee-485a-adb3-c67a924c2f46', '61ef188b-2513-49d5-8b1b-c6044a922fe1');
INSERT INTO "SuggestionFeedback" ("id", "feedback", "userId", "itemId") VALUES ('3361bef2-5a4e-4729-8e26-a8acd8f0c95e', 'This suggestion was really helpful', 'f74e1bbf-18d1-423e-9687-3cd265920b6b', '61ef188b-2513-49d5-8b1b-c6044a922fe1');
INSERT INTO "SuggestionFeedback" ("id", "feedback", "userId", "itemId") VALUES ('8b656489-45ed-4e6d-bd2b-53dd8a3a86fb', 'Great recommendation found it very useful.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a5d932d7-4eb8-4f19-8457-5fc15896317d');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
