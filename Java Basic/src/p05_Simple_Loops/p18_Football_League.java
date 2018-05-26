package p05_Simple_Loops;

import java.util.Scanner;

public class p18_Football_League {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        double capacity = Double.parseDouble(console.nextLine());
        double totalsFans = Double.parseDouble(console.nextLine());

        double a = 0;
        double b = 0;
        double v = 0;
        double g = 0;

        for (int i = 0; i < totalsFans; i++) {
            String letter = console.nextLine();

            switch (letter) {
                case "A":
                    a++;
                    break;
                case "B":
                    b++;
                    break;
                case "V":
                    v++;
                    break;
                case "G":
                    g++;
                    break;
            }
        }
        System.out.printf("%.2f%%\n", a / totalsFans * 100);
        System.out.printf("%.2f%%\n", b / totalsFans * 100);
        System.out.printf("%.2f%%\n", v / totalsFans * 100);
        System.out.printf("%.2f%%\n", g / totalsFans * 100);
        System.out.printf("%.2f%%\n", totalsFans / capacity * 100);
    }
}
