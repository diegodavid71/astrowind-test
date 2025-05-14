const limpiezaOficinas = new Proxy({"src":"/_astro/limpieza-oficinas.BFB4NuLq.jpeg","width":1070,"height":1070,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/d.olivas.trujillano/Documents/Astro/astrowind-test/src/assets/images/limpieza-oficinas.jpeg";
							}
							
							return target[name];
						}
					});

export { limpiezaOficinas as default };
