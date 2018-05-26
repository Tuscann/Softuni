package p07_Advanced_Loops;

import java.util.Scanner;

public class p05_Sequence_2K_1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer n = Integer.parseInt(input.nextLine());

        Integer num = 1;
        while (num<=n){
            System.out.println(num);
            num = num * 2 + 1;
        }
    }
}
