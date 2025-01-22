<?php
/**
 * OtherDeliveryAttributesTest
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
use OpenAPI\Client\Model\orders\OtherDeliveryAttributes;

/**
 * OtherDeliveryAttributesTest Class Doc Comment
 *
 * @category    Class
 * @description Miscellaneous delivery attributes associated with the shipping address.
 * @package     OpenAPI\Client
 */
class OtherDeliveryAttributesTest extends TestCase
{

    private OtherDeliveryAttributes $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OtherDeliveryAttributes();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OtherDeliveryAttributes"
     */
    public function testOtherDeliveryAttributes()
    {
        $this->assertInstanceOf(OtherDeliveryAttributes::class, $this->model);
    }
}
