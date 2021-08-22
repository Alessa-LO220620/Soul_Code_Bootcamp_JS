//Faça um algoritmo que apresente o numero elevado ao quadrado de cada um dos números pares entre 1 a 100.

count = 2;

while( count <= 100){
    if (count % 2 == 0)
    document.write(count*count, " ");
    count++;
}
