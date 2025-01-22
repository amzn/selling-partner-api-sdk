<?php
/**
 * ContentModuleTypeTest
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
use OpenAPI\Client\Model\aplusContent\ContentModuleType;

/**
 * ContentModuleTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of A+ Content module.
 * @package     OpenAPI\Client
 */
class ContentModuleTypeTest extends TestCase
{

    private ContentModuleType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContentModuleType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContentModuleType"
     */
    public function testContentModuleType()
    {
        $this->assertInstanceOf(ContentModuleType::class, $this->model);
    }
}
