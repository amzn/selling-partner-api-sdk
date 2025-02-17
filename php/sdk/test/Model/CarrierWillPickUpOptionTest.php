<?php
/**
 * CarrierWillPickUpOptionTest
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
use SpApi\Model\merchantFulfillment\v0\CarrierWillPickUpOption;

/**
 * CarrierWillPickUpOptionTest Class Doc Comment
 *
 * @category    Class
 * @description Carrier will pick up option.
 * @package     SpApi
 */
class CarrierWillPickUpOptionTest extends TestCase
{

    private CarrierWillPickUpOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CarrierWillPickUpOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CarrierWillPickUpOption"
     */
    public function testCarrierWillPickUpOption()
    {
        $this->assertInstanceOf(CarrierWillPickUpOption::class, $this->model);
    }
}
