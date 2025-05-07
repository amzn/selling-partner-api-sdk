<?php
/**
 * ScheduleExpressionTypeTest
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
use SpApi\Model\sellerWallet\v2024_03_01\ScheduleExpressionType;

/**
 * ScheduleExpressionTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of scheduled transfer expression.
 * @package     SpApi
 */
class ScheduleExpressionTypeTest extends TestCase
{

    private ScheduleExpressionType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ScheduleExpressionType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ScheduleExpressionType"
     */
    public function testScheduleExpressionType()
    {
        $this->assertInstanceOf(ScheduleExpressionType::class, $this->model);
    }
}
