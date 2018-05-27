package p07_Advanced_Loops;

import java.util.Scanner;

public class p04_Even_Powers_of_2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer n = Integer.parseInt(input.nextLine());

        Integer num = 1;
        for (int i = 0; i <= n; i +=2) {

            System.out.println(num);
            num *= 4;
        }
    }
}
