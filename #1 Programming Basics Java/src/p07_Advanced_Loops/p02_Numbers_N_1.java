package p07_Advanced_Loops;

import java.util.Scanner;

public class p02_Numbers_N_1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer n = Integer.parseInt(input.nextLine());

        for (int i = n; i >= 1; i--) {
            System.out.println(i);
        }
    }
}
