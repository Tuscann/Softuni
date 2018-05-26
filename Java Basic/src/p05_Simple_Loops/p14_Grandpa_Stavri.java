package p05_Simple_Loops;

import java.util.Scanner;

public class p14_Grandpa_Stavri {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int n = Integer.parseInt(console.nextLine());
        double totalRakia = 0.0;
        double totalLitersrakia = 0.0;

        for (int i = 0; i < n; i++) {
            double quantityRakia = Double.parseDouble(console.nextLine());
            double gradusRakia = Double.parseDouble(console.nextLine());
            totalLitersrakia += quantityRakia * gradusRakia;
            totalRakia += quantityRakia;
        }
        double degress = totalLitersrakia / totalRakia;

        System.out.printf("Liter: %.2f\n", totalRakia);
        System.out.printf("Degrees: %.2f\n", degress);


        if (degress < 38.00) {
            System.out.println("Not good, you should baking!");

        } else if (degress <= 42.00) {

            System.out.println("Super!");
        } else {
            System.out.println("Dilution with distilled water!");
        }
    }
}
