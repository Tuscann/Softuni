package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p18_Pipes_In_Pool {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer v = Integer.parseInt(input.nextLine());
        Integer p1 = Integer.parseInt(input.nextLine());
        Integer p2 = Integer.parseInt(input.nextLine());
        Double h = Double.parseDouble(input.nextLine());

        Double totalFiledWater = h * p1 + h * p2;

        if (totalFiledWater > v) {
            System.out.printf("For %f hours the pool overflows with %f liters.", h, totalFiledWater - v);
        } else {
            System.out.printf("The pool is %.0f%% full. Pipe 1: %.0f%%. Pipe 2: %.0f%%.",
                    Math.floor(totalFiledWater / v * 100),
                    Math.floor(p1 * h / totalFiledWater * 100),
                    Math.floor(p2 * h / totalFiledWater * 100));
        }
    }
}
