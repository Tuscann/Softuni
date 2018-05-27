package p07_Advanced_Loops;

import java.util.Scanner;

public class p03_Powers_of_Two {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer n = Integer.parseInt(input.nextLine());
        Integer num = 1;
        for (int i = 0; i <= n; i++) {

            System.out.println(num);
            num *= 2;
        }
    }
}
