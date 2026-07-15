-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "passwordHash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Scene" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "zone" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "SceneConnection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fromSceneId" INTEGER NOT NULL,
    "direction" TEXT NOT NULL,
    "toSceneId" INTEGER NOT NULL,
    "requiredItemId" INTEGER,
    "blockedMessage" TEXT,
    CONSTRAINT "SceneConnection_fromSceneId_fkey" FOREIGN KEY ("fromSceneId") REFERENCES "Scene" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sceneId" INTEGER NOT NULL,
    CONSTRAINT "Item_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "Scene" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Npc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "dialogue" TEXT NOT NULL,
    "sceneId" INTEGER NOT NULL,
    "givesItemId" INTEGER,
    "needsItemId" INTEGER,
    CONSTRAINT "Npc_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "Scene" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PlayerProgress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "currentSceneId" INTEGER NOT NULL DEFAULT 1,
    "inventory" TEXT NOT NULL DEFAULT '[]',
    "visitedScenes" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PlayerProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SceneConnection_fromSceneId_direction_key" ON "SceneConnection"("fromSceneId", "direction");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerProgress_userId_key" ON "PlayerProgress"("userId");
