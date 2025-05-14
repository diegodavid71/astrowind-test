const limpiezaNaves = new Proxy({"src":"/_astro/limpieza-naves.B4GySfHg.jpeg","width":512,"height":512,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/d.olivas.trujillano/Documents/Astro/astrowind-test/src/assets/images/limpieza-naves.jpeg";
							}
							
							return target[name];
						}
					});

export { limpiezaNaves as default };
