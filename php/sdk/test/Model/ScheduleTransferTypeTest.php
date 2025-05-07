<?php
/**
 * ScheduleTransferTypeTest
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
use SpApi\Model\sellerWallet\v2024_03_01\ScheduleTransferType;

/**
 * ScheduleTransferTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of schedule the transfer is on. Schedules based on time patterns use EventBridge.
 * @package     SpApi
 */
class ScheduleTransferTypeTest extends TestCase
{

    private ScheduleTransferType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ScheduleTransferType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ScheduleTransferType"
     */
    public function testScheduleTransferType()
    {
        $this->assertInstanceOf(ScheduleTransferType::class, $this->model);
    }
}
