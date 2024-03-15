/*
  Warnings:

  - You are about to drop the column `catagory` on the `issue` table. All the data in the column will be lost.
  - Added the required column `category` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `issue` DROP COLUMN `catagory`,
    ADD COLUMN `category` ENUM('SOFTWARE', 'HARDWARE', 'ACCESSORIES', 'REQUEST', 'OTHER') NOT NULL;
