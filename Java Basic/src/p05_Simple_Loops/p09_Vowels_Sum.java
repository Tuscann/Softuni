package p05_Simple_Loops;

import java.util.Scanner;

public class p09_Vowels_Sum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String s = scanner.nextLine();
        int sum = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'a') {
                sum += 1;
            } else if (s.charAt(i) == 'e') {
                sum += 2;
            } else if (s.charAt(i) == 'i') {
                sum += 3;
            } else if (s.charAt(i) == 'o') {
                sum += 4;
            } else if (s.charAt(i) == 'u') {
                sum += 5;
            }
        }
        System.out.println(sum);
    }
}
