<?php
/**
 * ScheduleExpressionTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\sellerWallet\v2024_03_01\ScheduleExpression;

/**
 * ScheduleExpressionTest Class Doc Comment
 *
 * @category    Class
 * @description The configuration of the schedule.
 * @package     SpApi
 */
class ScheduleExpressionTest extends TestCase
{

    private ScheduleExpression $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ScheduleExpression();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ScheduleExpression"
     */
    public function testScheduleExpression()
    {
        $this->assertInstanceOf(ScheduleExpression::class, $this->model);
    }

    /**
     * Test attribute "schedule_expression_type"
     */
    public function testPropertyScheduleExpressionType()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\ScheduleExpressionType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setScheduleExpressionType($testValue);
        $this->assertEquals($testValue, $this->model->getScheduleExpressionType());
    }

    /**
     * Test attribute "recurring_frequency"
     */
    public function testPropertyRecurringFrequency()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\RecurringFrequency();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setRecurringFrequency($testValue);
        $this->assertEquals($testValue, $this->model->getRecurringFrequency());
    }
}
