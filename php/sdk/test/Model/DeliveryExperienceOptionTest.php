<?php
/**
 * DeliveryExperienceOptionTest
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
use SpApi\Model\merchantFulfillment\v0\DeliveryExperienceOption;

/**
 * DeliveryExperienceOptionTest Class Doc Comment
 *
 * @category    Class
 * @description The delivery confirmation level.
 * @package     SpApi
 */
class DeliveryExperienceOptionTest extends TestCase
{

    private DeliveryExperienceOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeliveryExperienceOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeliveryExperienceOption"
     */
    public function testDeliveryExperienceOption()
    {
        $this->assertInstanceOf(DeliveryExperienceOption::class, $this->model);
    }
}
