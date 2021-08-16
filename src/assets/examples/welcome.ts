export default `

Welcome to Flylang Playground!

Input in the editor on the left, and results will be shown here in real time!

Flylang is an error-oriented language, with the following features:

  - With no cross-platform support
  - Able to run on shared hostings that support PHP 8.0 (This playground server is hosted on a free shared hosting)
  - Interpreted language
  - Extremely low performance
  - Huge code amount
  - Auto type-detection
  - Error oriented

Give us a star to show your support!

To show this message again, right-click on this editor, choose Command Palette and search for 'Playground: Display Help'.

Fly50w (Flylang PHP implemention): https://github.com/FuckOS/fly50w
Flylang Universal Standard: https://github.com/FuckOS/FlyLang-Universal-Standard
Flylang Playground API: https://play-f5w-01.flyos.top/api/play/

A hello world example:

	!import playground/println.f5w
	let main = fn () {
  		println(\"Hello, World\");
	};
	main();

An arithmetic example:

	let simpleMath = fn (numX, numY) {
		let numY = numX ** numY - 1;
		return (numY + 3) / 2.0;
	};
	print(simpleMath(123, 3));


You can use print(\"xxx\"); to output strings.
When \"playground/println.f5w\" is imported, then you can use println.
`
