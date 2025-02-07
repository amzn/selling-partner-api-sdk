<?php
/**
 * InputTargetTypeTest
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
use OpenAPI\Client\Model\merchantFulfillment\v0\InputTargetType;

/**
 * InputTargetTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates whether the additional seller input is at the item or shipment level.
 * @package     OpenAPI\Client
 */
class InputTargetTypeTest extends TestCase
{

    private InputTargetType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InputTargetType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InputTargetType"
     */
    public function testInputTargetType()
    {
        $this->assertInstanceOf(InputTargetType::class, $this->model);
    }
}
