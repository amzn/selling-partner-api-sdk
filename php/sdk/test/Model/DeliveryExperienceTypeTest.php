<?php
/**
 * DeliveryExperienceTypeTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\merchantFulfillment\v0\DeliveryExperienceType;

/**
 * DeliveryExperienceTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The delivery confirmation level.
 * @package     OpenAPI\Client
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
