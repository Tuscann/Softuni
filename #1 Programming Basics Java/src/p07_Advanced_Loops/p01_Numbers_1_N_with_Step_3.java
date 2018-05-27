package p07_Advanced_Loops;

import java.util.Scanner;

public class p01_Numbers_1_N_with_Step_3 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int n = Integer.parseInt(input.nextLine());

        for (int i = 1; i <= n; i += 3) {
            System.out.println(i);
        }
    }
}
