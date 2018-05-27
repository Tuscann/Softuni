package p05_Simple_Loops;

import java.util.Scanner;

public class p02_Numbers_Ending_in_7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Integer n = Integer.parseInt(scanner.nextLine());

        for (int i = 7; i < 1000; i++) {
            if (i % 10 == 7) {
                System.out.println(i);
            }
        }
    }
}
