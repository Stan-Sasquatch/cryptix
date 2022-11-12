/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Clue` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Puzzle` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Clue_id_key" ON "Clue"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Puzzle_id_key" ON "Puzzle"("id");
