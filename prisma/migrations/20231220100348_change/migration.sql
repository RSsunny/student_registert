/*
  Warnings:

  - You are about to alter the column `age` on the `users` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `age` INTEGER NOT NULL;
