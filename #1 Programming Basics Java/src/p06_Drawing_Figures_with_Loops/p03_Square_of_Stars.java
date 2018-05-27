package p06_Drawing_Figures_with_Loops;

import java.util.Scanner;

public class p03_Square_of_Stars {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        Integer n = Integer.parseInt(console.nextLine());

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
