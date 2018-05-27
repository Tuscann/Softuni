package p03_Simple_Conditional_Statements;

import java.math.BigDecimal;
import java.util.Scanner;

public class p08_Metric_Converter2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        BigDecimal size = input.nextBigDecimal();
        String sourceMetric = input.next().toLowerCase();
        String destinationMetric = input.next().toLowerCase();

        if (sourceMetric.equals("km")) size = size.divide(new BigDecimal("0.001"), 5, BigDecimal.ROUND_DOWN);
        if (sourceMetric.equals("mm")) size = size.divide(new BigDecimal("1000"), 5, BigDecimal.ROUND_DOWN);
        if (sourceMetric.equals("cm")) size = size.divide(new BigDecimal("100"), 5, BigDecimal.ROUND_DOWN);
        if (sourceMetric.equals("mi")) size = size.divide(new BigDecimal("0.000621371192"), 5, BigDecimal.ROUND_DOWN);
        if (sourceMetric.equals("in")) size = size.divide(new BigDecimal("39.3700787"), 5, BigDecimal.ROUND_DOWN);
        if (sourceMetric.equals("ft")) size = size.divide(new BigDecimal("3.2808399"), 5, BigDecimal.ROUND_DOWN);
        if (sourceMetric.equals("yd")) size = size.divide(new BigDecimal("1.0936133"), 5, BigDecimal.ROUND_DOWN);
        if (destinationMetric.equals("km")) size = size.multiply(new BigDecimal("0.001"));
        if (destinationMetric.equals("mm")) size = size.multiply(new BigDecimal("1000"));
        if (destinationMetric.equals("cm")) size = size.multiply(new BigDecimal("100"));
        if (destinationMetric.equals("mi")) size = size.multiply(new BigDecimal("0.000621371192"));
        if (destinationMetric.equals("in")) size = size.multiply(new BigDecimal("39.3700787"));
        if (destinationMetric.equals("ft")) size = size.multiply(new BigDecimal("3.2808399"));
        if (destinationMetric.equals("yd")) size = size.multiply(new BigDecimal("1.0936133"));
        System.out.println(size + " " + destinationMetric);
    }
}
