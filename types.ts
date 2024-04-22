import { Card, List } from "@prisma/client";

export type ListWithCards = List & { cards: Card[] };

export type CirdWithList = Card & { list: List };