<?php
/**
 * IdTypeTest
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
use OpenAPI\Client\Model\productFees\IdType;

/**
 * IdTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of product identifier used in a &#x60;FeesEstimateByIdRequest&#x60;.
 * @package     OpenAPI\Client
 */
class IdTypeTest extends TestCase
{

    private IdType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IdType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IdType"
     */
    public function testIdType()
    {
        $this->assertInstanceOf(IdType::class, $this->model);
    }
}
