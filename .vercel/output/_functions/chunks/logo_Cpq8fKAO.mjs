const logo = new Proxy({"src":"/_astro/logo.B2y-SLdq.png","width":304,"height":111,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/d.olivas.trujillano/Documents/Astro/astrowind-test/src/assets/images/logo.png";
							}
							
							return target[name];
						}
					});

export { logo as default };
