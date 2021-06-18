const amiguis = [
  {
    name: 'Valentino',
    age: 19,
  },
  {
    name: 'Gabriel',
    age: 20,
  },
  {
    name: 'Simón',
    age: 23,
  },
]

let agePersonas = []

for (let i = 0; i < amiguis.length; i++) {
  agePersonas.push(amiguis[i].age)
}

console.log(agePersonas)

const ageAmiguisMap = amiguis.map((amigui) => amigui.age)

console.log(ageAmiguisMap)

amiguis.map((amigui) =>
  console.log(`Soy ${amigui.name} y tengo ${amigui.age} años`),
)

for (let i = 0; i < amiguis.length; i++) {
  console.log(
    `Soy ${amiguis[i].name} y tengo ${amiguis[i].age} años pero ahora con for`,
  )
}
