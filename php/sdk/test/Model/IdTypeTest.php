<?php
/**
 * IdTypeTest
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
use SpApi\Model\productFees\v0\IdType;

/**
 * IdTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of product identifier used in a &#x60;FeesEstimateByIdRequest&#x60;.
 * @package     SpApi
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
