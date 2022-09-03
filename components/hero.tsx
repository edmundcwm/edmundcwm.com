const Hero = () => {
	return (
		<header className="bg-primary py-9 text-center">
			<img
				height="110"
				width="110"
				className="mx-auto mb-7"
				src="./images/ed-profile.png"
				alt="edmundcwm"
			/>
			<h1 className="text-white text-4xl mb-2">Edmund Chan</h1>
			<h3 className="text-white mb-4">All things WordPress and Web Development</h3>
			<a href="https://twitter.com/edmundcwm" target="_blank" rel="noreferrer noopener">
				<img
					src="./icons/twitter.svg"
					width="25"
					height="25"
					alt="Twitter"
					className="mx-auto fill-current text-white"
				/>
			</a>
		</header>
	);
};

export default Hero;
