<?php
/**
 * DeliveryExperienceTypeTest
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
use SpApi\Model\merchantFulfillment\v0\DeliveryExperienceType;

/**
 * DeliveryExperienceTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The delivery confirmation level.
 * @package     SpApi
 */
class DeliveryExperienceTypeTest extends TestCase
{

    private DeliveryExperienceType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeliveryExperienceType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeliveryExperienceType"
     */
    public function testDeliveryExperienceType()
    {
        $this->assertInstanceOf(DeliveryExperienceType::class, $this->model);
    }
}
