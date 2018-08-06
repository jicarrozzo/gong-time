//https://quotesondesign.com/api-v4-0/
export class APIQuote {
	ID: number;
	title: string;
	content: string;
	link: string;

	constructor() {}
}

export class Quote {
	author: string;
	quote: string;
	splitWords: Array<string>;

	strip(html: string) {
		return html.replace(/<(?:.|\n)*?>/gm, '');
	}

	br2nl(html: string) {
		return html.replace(/<br( \/|\/|)>/gm, '\r\n');
	}

	constructor(_q?: APIQuote) {
		if (_q != null) {
			this.author = _q.title;
			this.quote = _q.content; // this.strip(this.br2nl(_q.content));
			this.splitWords = this.strip(this.br2nl(this.quote)).split(' ');
		}
	}
}
