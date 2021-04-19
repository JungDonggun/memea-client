interface FrequentlyMemeCardData {
  pk: string
  title: string
  url: string
  like: {
    like: boolean,
    count: number | string
  }
  comment: {
    reply: boolean,
    count: number | string
  }
}

interface FrequentlyMemeCarHeaderData {
  title: string
  like: {
    like: boolean,
    count: number | string
  }
  comment: {
    reply: boolean,
    count: number | string
  }
}
