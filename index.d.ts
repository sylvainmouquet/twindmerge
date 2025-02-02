declare namespace merge {
	function merge(...classNames: (string | string[])[]): string;
}

declare function merge(...classNames: (string | string[])[]): string;

export = merge;