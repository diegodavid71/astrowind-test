const googlePlay = new Proxy({"src":"/_astro/google-play.ISTMcpLO.png","width":300,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/d.olivas.trujillano/Documents/Astro/astrowind-test/src/assets/images/google-play.png";
							}
							
							return target[name];
						}
					});

export { googlePlay as default };
