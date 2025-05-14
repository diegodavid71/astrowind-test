const Diego_Olivas_Image = new Proxy({"src":"/_astro/Diego Olivas Image.dBXhJGIG.png","width":633,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/d.olivas.trujillano/Documents/Astro/astrowind-test/src/assets/images/Diego Olivas Image.png";
							}
							
							return target[name];
						}
					});

export { Diego_Olivas_Image as default };
