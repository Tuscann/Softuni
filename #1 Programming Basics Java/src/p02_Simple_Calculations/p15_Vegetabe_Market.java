package p02_Simple_Calculations;

import java.util.Scanner;

public class p15_Vegetabe_Market {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Double priseVegetables = Double.parseDouble(input.nextLine());
        Double priseFruits = Double.parseDouble(input.nextLine());
        Integer kilogramsVegetables = Integer.parseInt(input.nextLine());
        Integer kilogramsFruits = Integer.parseInt(input.nextLine());

        Double cost = priseFruits * kilogramsFruits + priseVegetables * kilogramsVegetables;

        System.out.printf("%f", cost / 1.94);
    }
}
