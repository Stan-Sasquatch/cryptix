-- CreateTable
CREATE TABLE "Puzzle" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Puzzle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clue" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "word" TEXT NOT NULL,
    "positionInClueWord" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Clue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClueToPuzzle" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClueToPuzzle_AB_unique" ON "_ClueToPuzzle"("A", "B");

-- CreateIndex
CREATE INDEX "_ClueToPuzzle_B_index" ON "_ClueToPuzzle"("B");

-- AddForeignKey
ALTER TABLE "_ClueToPuzzle" ADD CONSTRAINT "_ClueToPuzzle_A_fkey" FOREIGN KEY ("A") REFERENCES "Clue"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClueToPuzzle" ADD CONSTRAINT "_ClueToPuzzle_B_fkey" FOREIGN KEY ("B") REFERENCES "Puzzle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
