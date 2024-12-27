<?php
/**
 * DecoratorTypeTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\apluscontent\DecoratorType;

/**
 * DecoratorTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of rich text decorator.
 * @package     OpenAPI\Client
 */
class DecoratorTypeTest extends TestCase
{

    private DecoratorType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DecoratorType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DecoratorType"
     */
    public function testDecoratorType()
    {
        $this->assertInstanceOf(DecoratorType::class, $this->model);
    }
}
